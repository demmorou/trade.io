import React, { useCallback, useState } from "react";

import { Container, Content, Log } from "./styles";
import { startSocket, emitMessage } from "../../services/socket";

const Home: React.FC = () => {
  const [url, setUrl] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");

  const onMessage = useCallback(
    (data: any) => {
      setMessages([...messages, data]);
    },
    [messages]
  );

  const handleConnectButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => (
      url: string
    ) => {
      startSocket(url, onMessage, {
        autoConnect: true,
        path: "/profiles/gateway",
        reconnection: false,
        query: {
          authorization:
            "Bearer 3lVZSpFWDmae-Mnkum9iWpQFHCvkMd6RYGNsRiNUYqY._YC3BaKIzPSQtI_54X9QehUyaaFYrPpc6ja5QA8Nxv4",
        },
      });
    },
    [onMessage]
  );

  const handleEmitMessage = useCallback(() => {
    emitMessage(to, message);
  }, [message, to]);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newUrl = event.target.value;
      setUrl(newUrl);

      setIsFilled(event.target.value.length >= 10);
    },
    []
  );

  return (
    <Container>
      <Content isFilled={isFilled}>
        <input
          defaultValue={url}
          onChange={handleOnChange}
          type="text"
          placeholder="URL"
        />
        <button
          disabled={false}
          onClick={(e) => handleConnectButton(e)(url)}
          type="button"
        >
          Connect
        </button>
      </Content>

      <Content isFilled={isFilled}>
        <input
          defaultValue={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Message"
        />
        <input
          defaultValue={to}
          onChange={(e) => setTo(e.target.value)}
          type="text"
          placeholder="To"
        />
        <button disabled={false} onClick={handleEmitMessage} type="button">
          Send
        </button>
      </Content>

      <p>Log</p>
      <Log>
        {messages.map((message: any) => (
          <div> {JSON.stringify(message)} </div>
        ))}
      </Log>
    </Container>
  );
};

export default Home;
