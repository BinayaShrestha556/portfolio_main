"use client";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

import { useParams } from "next/navigation";


import ImageUpload from "@/components/ui/image-upload";
import { Images, Project } from "@prisma/client";
import { addProjects, updateProjects } from "@/server-actions/addProjects";

interface ProductsFormProps {
  initialData: (Project & { images: Images[] }) | null;
}
export const formSchema = z.object({
  title: z.string().min(1),
  images: z.object({ url: z.string() }).array(),
  password: z.string(),
  description: z.string(),
  sourceCodeUrl: z.string().url(),
  liveWebsiteUrl: z.string().url(),
  priority: z.number(),
});
type ProductsFormValues = z.infer<typeof formSchema>;
const ProductsForm: React.FC<ProductsFormProps> = ({ initialData }) => {
  const [isMounted, setIsMounted] = useState(false);

  const [loading, setLoading] = useState(false);
  const title = initialData ? "Edit project" : "create project";

  const action = initialData ? "Save changes" : "Create";

  const form = useForm<ProductsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          images: initialData.images || [],
          password:"",
        }
      : {
          title: "",
          images: [],
          password: "",
          description: "",
          sourceCodeUrl: "",
          liveWebsiteUrl: "",
          priority: 0,
        },
  });
  const params = useParams();


  const onSubmit = async (data: ProductsFormValues) => {
    try {
      setLoading(true);
      toast.error("hello bro");

      if (initialData && params.productId) {
        const res = await updateProjects({
          ...data,
          id: Array.isArray(params.productId)
            ? params.productId[0]
            : params.productId,
        });
        toast(res);
      } else {
        const res = await addProjects(data);
      
        toast(res);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      <div className="flex w-[80%] justify-self-center self-center  items-center pb-2 justify-between">
        <h1 title={title} />
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-8 w-full"
        >
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={(field.value || []).map((image) => image.url)} // Ensure field.value is an array
                    disabled={loading}
                    onChange={(urls) => {
                      // Convert URLs to image objects
                      const updatedImages = urls.map((url) => ({ url }));
                      console.log("Updated images:", updatedImages);
                      field.onChange(updatedImages); // Update the form state
                    }}
                    onRemove={(url) => {
                      const updatedImages = (field.value || []).filter(
                        (current) => current.url !== url // Remove the image by its URL
                      );
                      console.log("Images after removal:", updatedImages);
                      field.onChange(updatedImages); // Update the form state
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="title of project"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>description</FormLabel>
                  <FormControl>
                    <textarea
                      rows={5}
                      className="border-border min-w-60 border bg-transparent"
                      disabled={loading}
                      placeholder="Type something"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="liveWebsiteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website url</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sourceCodeUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>github url</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input type="password"
                      disabled={loading}
                      placeholder="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>priority</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={loading}
                      placeholder="Product priority"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
      <Separator className="my-4" />
    </>
  );
};

export default ProductsForm;
