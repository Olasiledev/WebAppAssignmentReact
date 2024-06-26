import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase-config';
import { doc, getDoc } from "firebase/firestore";

const styles = {
    userProfileContainer: {
        background: '#f8f8f8',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '400px',
        margin: '20px auto',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    header: {
        color: '#0056b3',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px',
        marginBottom: '20px',
    },
    paragraph: {
        color: '#333',
        marginBottom: '10px',
        lineHeight: '1.6',
    }
};

// Comments for this file

// Below is the Function for the UserProfile that fetchUsers from the Firebase and Displays the user details to the Dashboard

// It fetchs the users details from the collection "users" and displays the collection data to the dashboard using variables



function UserProfile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        //USER PROFILE FETCH
        const fetchUserProfile = async () => {
            const user = auth.currentUser;
            if (user) {
                const userProfileRef = doc(db, "users", user.uid);
                const userProfileSnap = await getDoc(userProfileRef);

                if (userProfileSnap.exists()) {
                    setProfile(userProfileSnap.data());
                } else {
                    console.log("User not found");
                }
            }
        };

        fetchUserProfile();
    }, []);

    if (!profile) {
        return <div style={styles.paragraph}>Loading user profile...</div>;
    }

    // Below are the variables that are displayed 

    return (
        <div style={styles.userProfileContainer}>
            <h2 style={styles.header}>User Profile</h2>
            <p style={styles.paragraph}>First Name: {profile.firstName}</p>
            <p style={styles.paragraph}>Last Name: {profile.lastName}</p>
            <p style={styles.paragraph}>Program Name: {profile.programName}</p>
            <p style={styles.paragraph}>Course Name: {profile.courseName}</p>
        </div>
    );
}

export default UserProfile;
