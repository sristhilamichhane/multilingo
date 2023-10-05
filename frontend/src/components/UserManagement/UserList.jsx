import { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Add as AddIcon,
} from "@mui/icons-material";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", points: 100 },
    { id: 2, name: "Jane Smith", points: 200 },
    { id: 3, name: "Bob Johnson", points: 150 },
  ]);

  const [isAddUserCardOpen, setAddUserCardOpen] = useState(false);

  const [editingUserId, setEditingUserId] = useState(null);
  const [newUser, setNewUser] = useState({ id: "", name: "", points: "" });

  const handleEditUser = (userId) => {
    setEditingUserId(userId);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleSaveUser = () => {
    setUsers((prevUsers) => {
      const userIndex = prevUsers.findIndex(
        (user) => user.id === editingUserId
      );
      if (userIndex !== -1) {
        prevUsers[userIndex] = { ...prevUsers[userIndex], ...newUser };
      }
      return prevUsers;
    });
    setEditingUserId(null);
    setNewUser({ id: "", name: "", points: "" });
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setNewUser({ id: "", name: "", points: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    setAddUserCardOpen(true);
  };
  const handleAddUserSubmit = () => {
    // Add the new user to the users array
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: newUser.id, // You can generate a unique ID or use a different approach
        name: newUser.name,
        points: newUser.points,
      },
    ]);

    // Close the add user card and reset the newUser state
    setAddUserCardOpen(false);
    setNewUser({ id: "", name: "", points: "" });
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>

      <TableContainer component={Paper} mt={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>User Points</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.points}</TableCell>
                <TableCell>
                  {editingUserId === user.id ? (
                    <>
                      <Stack direction="row" gap={1}>
                        <TextField
                          name="name"
                          value={newUser.name}
                          onChange={handleInputChange}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                        <TextField
                          name="points"
                          value={newUser.points}
                          onChange={handleInputChange}
                          variant="outlined"
                          size="small"
                          fullWidth
                          mt={1}
                        />
                      </Stack>
                      <Box mt={1}>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={handleSaveUser}
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          color="error"
                          onClick={handleCancelEdit}
                          sx={{ marginLeft: 1 }}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => handleEditUser(user.id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        mt={4}
        onClick={() => handleAddUser()}
      >
        Add User
      </Button>

      {/* Add User Card */}
      {isAddUserCardOpen && (
        <Card mt={4}>
          <CardContent>
            <Typography variant="h6">Add New User</Typography>
            <Stack direction="column" gap={1}>
              <TextField
                name="id"
                label="User ID"
                value={newUser.id}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                fullWidth
                mb={1}
              />
              <TextField
                name="name"
                label="User Name"
                value={newUser.name}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                fullWidth
                mb={1}
              />
              <TextField
                name="points"
                label="User Points"
                value={newUser.points}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                fullWidth
                mb={1}
              />
            </Stack>
            <Stack direction="row" marginTop={2}>
              <Button
                variant="contained"
                size="small"
                onClick={handleAddUserSubmit}
              >
                Save
              </Button>
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={() => setAddUserCardOpen(false)}
                sx={{ marginLeft: 1 }}
              >
                Cancel
              </Button>
            </Stack>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default UserList;
