import socketio from "socket.io-client";

let socket = socketio();

export const startSocket = async (
  url: string,
  onMessage: Function,
  opts?: SocketIOClient.ConnectOpts
) => {
  socket = await socketio(url, opts).connect();

  socket.on("@send-profile-status", onMessage);
};

export const emitMessage = (to: string, profile_id: string) => {
  socket.emit(to, { profile_id });
};

// export { disconnect };
