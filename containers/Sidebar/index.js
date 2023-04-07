import SidebarInnerWrapper from "./SidebarInnerWrapper";
import LazyMenu from "parts/LazyMenu";
import StickyBox from "utils/hocs/StickyBox";

const Sidebar = ({ className }) => (
  <StickyBox className={className}>
    <SidebarInnerWrapper>
      <LazyMenu />
    </SidebarInnerWrapper>
  </StickyBox>
);

export default Sidebar;
