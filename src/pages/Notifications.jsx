import { usePlacement } from "../context/PlacementContext";

function Notifications() {

    const { notifications } = usePlacement();

    return (
        <div className="page">

            <div className="page-heading">
                <p className="eyebrow">
                    UPDATES
                </p>

                <h1>Notifications</h1>

                <p>
                    Important updates about your placement journey.
                </p>
            </div>


            <div className="notifications-list">

                {notifications.map((notification) => (

                    <div
                        className="notification-card"
                        key={notification.id}
                    >

                        <div className="big-notification-icon">
                            🔔
                        </div>

                        <div>
                            <h3>
                                {notification.title}
                            </h3>

                            <p>
                                {notification.message}
                            </p>

                            <small>
                                {notification.time}
                            </small>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Notifications;