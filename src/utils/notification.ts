import { NOTIFICATION_TYPE, Store } from "react-notifications-component";

export const notification = (title: string, type: NOTIFICATION_TYPE | undefined, message: string) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
