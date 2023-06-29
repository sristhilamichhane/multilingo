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
        onClick={() => setEditingUserId(null)} // Set the editingUserId to null instead of 'new'
      >
        Add User
      </Button>
    </Box>
  );
};

export default UserList;
