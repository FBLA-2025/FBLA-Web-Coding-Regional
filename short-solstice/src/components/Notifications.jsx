import { useState, useEffect } from "react";
import "../styles/Notifications.css";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [isEmployer, setIsEmployer] = useState(null);

  useEffect(() => {
    const employerStatus = localStorage.getItem("isEmployer") === "true";
    setIsEmployer(employerStatus);

    // const notifs = [
    //   {
    //     id: 1,
    //     type: "rejection",
    //     jobTitle: "Frontend Developer",
    //     company: "TechCorp",
    //   },
    //   {
    //     id: 2,
    //     type: "acceptance",
    //     jobTitle: "UX Designer",
    //     company: "DesignHub",
    //   },
    //   {
    //     id: 3,
    //     type: "interview",
    //     jobTitle: "Data Scientist",
    //     company: "DataWorks",
    //   },
    // ];
    // setNotifications(notifs);
  }, []);

  if (isEmployer) {
    return null;
  }

  return (
    <div>
      {isEmployer ? (
        <></>
      ) : (
        <div className="notifications">
          <h2>Notifications</h2>
          <div className="notifications-list">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`notification-card ${notif.type}`}
                >
                  <p>
                    {notif.type === "rejection" &&
                      `Your application for ${notif.jobTitle} at ${notif.company} was not accepted.`}
                    {notif.type === "acceptance" &&
                      `Congratulations! You've been accepted for the ${notif.jobTitle} position at ${notif.company}.`}
                    {notif.type === "interview" &&
                      `You have an interview scheduled for the ${notif.jobTitle} position at ${notif.company}.`}
                  </p>
                </div>
              ))
            ) : (
              <p>No notifications</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
