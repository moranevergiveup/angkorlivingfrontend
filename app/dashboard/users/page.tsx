// "use client";
// import { useEffect, useState } from "react";
// import { getUsers, createUser, updateUser, resetPassword } from "../../../lib/api/user"; 
// import { User, UserRequest } from "../../../lib/types/user";
// import Form from "@/components/Form";
// import Table from "@/components/Table"; // 👉 call reusable Table
// import toast from "react-hot-toast";

// export default function UsersPage() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [showForm, setShowForm] = useState(false);

//   async function loadUsers() {
//     try {
//       const data = await getUsers();
//       setUsers(data);
//     } catch (err) {
//       console.log(err)
//       toast.error("Failed to fetch users");
//     }
//   }

//  useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const data = await getUsers();
//       setUsers(data); 
//     } catch (err) {
//       console.log(err)
//       toast.error("Failed to fetch users");
//     }
//   };
//   fetchUsers();
// }, []);


//   async function handleSave(values: UserRequest) {
//     try {
//       if (selectedUser?.id) {
//         await updateUser(selectedUser.id.toString(), values);
//         toast.success("User updated successfully");
//       } else {
//         await createUser({
//           username: values.username,
//           email: values.email,
//           phone:values.phone,
//           role: "TENANT",
//           password: "AngkorLiving@123", // 👉 default password
//         });
//         toast.success("User created successfully");
//       }
//       await loadUsers();
//       setShowForm(false);
//       setSelectedUser(null);
//     } catch (err) {
//       toast.error("Failed to save user");
//     }
//   }

//   async function handleResetPassword(user: User) {
//     try {
//       await resetPassword(user.id.toString());
//       toast.success("Password reset successfully to default: AngkorLiving@123");
//       await loadUsers();
//     } catch (err) {
//       console.log(err)
//       toast.error("Failed to reset password");
//     }
//   }

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-2xl font-bold text-indigo-700">All Users</h1>
//         <button
//           onClick={() => { setSelectedUser(null); setShowForm(true); }}
//           className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//         >
//           + Create Account
//         </button>
//       </div>

//       {/*  Call Table component */}
//       <Table<User>
//         items={users}
//         fields={[
//           { key: "username", label: "Username" },
//           { key: "email", label: "Email" },
//           // { key: "role", label: "Role" },
//           { key: "phone", label: "Phone" },
//           // { key: "profileImage", label: "Profile", type: "image" },
//         ]}
//         // onEdit={(user) => { setSelectedUser(user); setShowForm(true); }}
//         onResetPassword={handleResetPassword}
//       />

//       {/*  Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
//             <Form<UserRequest>
//               key={selectedUser?.id ?? "new"}
//               initialValues={
//                 selectedUser
//                   ? {
//                       username: selectedUser.username,
//                       email: selectedUser.email,
//                       role: selectedUser.role,
//                       phone: selectedUser.phone ?? "",
//                       // profileImage: selectedUser.profileImage ?? "",
//                     }
//                   : { username: "", email: "" }
//               }
//               fields={[
//                 { key: "username", label: "Username" },
//                 { key: "email", label: "Email", type: "email" },
//                 { key: "phone", label: "Phone", type: "text" },
//               ]}
//               onSave={handleSave}
//               onCancel={() => { setShowForm(false); setSelectedUser(null); }}
//               isEdit={!!selectedUser}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, resetPassword } from "../../../lib/api/user"; 
import { User, UserRequest } from "../../../lib/types/user";
import Form from "@/components/Form";
import Table from "@/components/Table";
import toast from "react-hot-toast";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  async function loadUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch users");
    }
  }

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch users");
    }
  };

  fetchUsers();
}, []);


  async function handleSave(values: UserRequest) {
    try {
      if (selectedUser?.id) {
        await updateUser(selectedUser.id.toString(), values);
        toast.success("User updated successfully");
      } else {
        await createUser({
          username: values.username,
          email: values.email,
          phone: values.phone,
          role: "TENANT",
          password: "AngkorLiving@123", // default password
        });
        toast.success("User created successfully");
      }
      await loadUsers();
      setShowForm(false);
      setSelectedUser(null);
    } catch (err) {
      toast.error("Failed to save user");
    }
  }

  async function handleResetPassword(user: User) {
    try {
      await resetPassword(user.id.toString());
      toast.success("Password reset successfully to default: AngkorLiving@123");
      await loadUsers();
    } catch (err) {
      console.log(err);
      toast.error("Failed to reset password");
    }
  }

  const filteredUsers = users.filter(u =>
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-indigo-700">All Users</h1>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="px-3 py-2 border text-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => { setSelectedUser(null); setShowForm(true); }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            + Create Account
          </button>
        </div>
      </div>

      {/* Table with filtered users */}
      <Table<User>
        items={filteredUsers}
        fields={[
          { key: "username", label: "Username" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
        ]}
        onResetPassword={handleResetPassword}
      />

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <Form<UserRequest>
              key={selectedUser?.id ?? "new"}
              initialValues={
                selectedUser
                  ? {
                      username: selectedUser.username,
                      email: selectedUser.email,
                      role: selectedUser.role,
                      phone: selectedUser.phone ?? "",
                      password: "AngkorLiving@123", // ensure type safety
                    }
                  : { username: "", email: "", password: "AngkorLiving@123" }
              }
              fields={[
                { key: "username", label: "Username" },
                { key: "email", label: "Email", type: "email" },
                { key: "phone", label: "Phone", type: "text" },
              ]}
              onSave={handleSave}
              onCancel={() => { setShowForm(false); setSelectedUser(null); }}
              isEdit={!!selectedUser}
            />
          </div>
        </div>
      )}
    </div>
  );
}
