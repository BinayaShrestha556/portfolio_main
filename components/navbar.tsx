
import NavbarActions from "./navbar-actions"


const Navbar = () => {
  const links=[
    {
      label:"Home",
      href:"#home",
    },
    {
      label:"About me",
      href:"#aboutme"
    },
    {
      label:"Tech Stacks",
      href:"#tech_stacks"
    },
    {
      label:"Projects",
      href:"#projects"
    }
  ]
  return (
    <div className="pt-5 z-50 fixed bg-gradient-to-b from-background to-background/5 w-full flex items-center justify-center">
      <div className="w-[90%] flex justify-between">
        <div className="h-8 w-8 bg-primary rounded-full"/>
        <NavbarActions routes={links}/>

      </div>
       </div>
  )
}

export default Navbar