import { Box, styled } from "@mui/material";
import UserList from "../components/UserManagement/UserList";
import AdminNavbar from "./adminPages/AdminNavbar";
import AdminSidebar from "./adminPages/AdminSidebar";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const UserManagement = () => {
  return (
    <>
      <div className="bgColor">
        <AdminNavbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <AdminSidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <UserList />
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default UserManagement;
