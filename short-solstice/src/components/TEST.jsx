import React, { useState, useEffect } from "react";
export default function TEST() {
  const [user, setUser] = useState(null);
  const [isEmployer, setIsEmployer] = useState(false);
  const api = baseURL();

  useEffect(() => {
    const userId = localStorage.getItem("currentUserId");

    const fetchUser = async () => {
      try {
        const response = await api.get(
          `/retrieve-user/TalentLinkDB/users/${userId}`
        );
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
}
