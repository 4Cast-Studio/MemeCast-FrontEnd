import ImageCamila from './Camila.webp';

import styles from './Page.module.scss';

export function Component() {
  const { account } = useSolanaBlockchain();

  const { botChats, botChatSend, botChatsLoading } = useBotChats();
  const { user } = useUser(account);

  const [input, setInput] = useState('');

  const ref = useRef<HTMLDivElement>(null);

  // Scroll to chats bottom.
  useEffect(() => {
    const container = ref.current;

    if (container == null) {
      return undefined;
    }

    const observer = new MutationObserver(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSend = useCallback(async () => {
    await botChatSend({
      content: input,
      username: user?.name ?? '',
      conversation: botChats,
    });
  }, [botChatSend, input, user, botChats]);

  const handleOptionSend = useCallback(async (value: string) => {
    await botChatSend({
      content: value,
      username: user?.name ?? '',
      conversation: botChats,
    });
  }, [botChatSend, user, botChats]);

  return (
    <div className={styles.page}>
      <div className={styles.pane}>
        <div className={styles.top}>
          <div className={styles.title}>ASK ME ANYTHING</div>
        </div>
        <div ref={ref} className={styles.content}>
          {
            botChats.map((chat, index) => (
              <div key={index}>
                {
                  chat.content !== '' && (
                    <div className={styles.question}>
                      <div className={styles.text}>{ chat.content }</div>
                    </div>
                  )
                }
                {
                  chat.response !== '' && (
                    <div className={styles.response}>
                      <img src={ImageCamila} alt="Camila" className={styles.image} />
                      <div className={styles.name}>Agent</div>
                      <div />
                      <div>{ chat.response }</div>
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
        <ChatCreate
          input={input}
          onInputChange={setInput}
          onSend={handleSend}
          onOptionSend={handleOptionSend}
          sendLoading={botChatsLoading}
        />
        <div className={styles.bottom}>
          <a className={styles.link}>PLAY WITH CAMILA NOW!</a>
        </div>
      </div>
    </div>
  );
}
