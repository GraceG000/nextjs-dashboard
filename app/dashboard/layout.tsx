//iporting the side naviation bar component from app/ui/dashboard/sidenav.tsx...
import SideNav from "../ui/dashboard/sidenav";

//children represents a prop, whereby this prop can either be a page or another layout...in this case, all the page.tsx
//files in the dashboard folder are the children...
export default function Layout({children}: {children: React.ReactNode }) {
    return(
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                {/* Using the SideNav component that was imported...it will now be a part of the dashboard... */}
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                 {children}
            </div>
        </div>
    )
}