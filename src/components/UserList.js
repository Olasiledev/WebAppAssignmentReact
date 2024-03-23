import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from "firebase/firestore";

const styles = {
    widgetContainer: {
        background: '#f8f8f8',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '600px',
        margin: '20px auto',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    header: {
        color: '#0056b3',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px',
        marginBottom: '20px',
    },
    userItem: {
        color: '#333',
        marginBottom: '15px',
        lineHeight: '1.6',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px',
    }
};

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const userCollectionRef = collection(db, "users");
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };

        fetchUsers();
    }, []);

    if (users.length === 0) {
        return <div style={styles.userItem}>Loading user profile...</div>;
    }

    return (
        <div style={styles.widgetContainer}>
            <h2 style={styles.header}>Registered Users</h2>
            {users.map((user, index) => (
                <div key={index} style={styles.userItem}>
                    <p>{user.firstName} {user.lastName}</p>
                </div>
            ))}
        </div>
    );
}

export default UserList;
