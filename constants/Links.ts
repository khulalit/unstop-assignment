import DashboardIcon from '@/assets/SideBar/dashboard.svg';
import AssesmentIcon from '@/assets/SideBar/assesments.svg';
import LibraryIcon from '@/assets/SideBar/library.svg';


export const SidePannelLinks = [
    {
      title: "Dashboard",
      Icon: DashboardIcon,
      link: "https://example.com/dashboard",
      isSelected : false
    },
    {
      title: "Assessment",
      Icon: AssesmentIcon,
      link: "https://example.com/assessment",
      isSelected : true
    },
    {
      title: "My Library",
      Icon: LibraryIcon,
      link: "https://example.com/library",
      isSelected : false
    }
  ];