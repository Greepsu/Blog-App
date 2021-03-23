import React from "react";
import Chat from "./Chat";
import Header from "./Header";

export default function PrivateMessage() {
  return (
    <div>
      <Header pageName="Private message" />
      <section>
          <Chat />
      </section>
    </div>
  );
}
