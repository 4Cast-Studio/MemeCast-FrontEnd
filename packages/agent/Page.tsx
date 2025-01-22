import styles from './Page.module.scss';

export function Component() {
  const [input, setInput] = useState('');

  const handleSend = useCallback(async () => {
    // Send question.
  }, []);

  const handleOptionSend = useCallback(async (value: string) => {
    // Send preset question.
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.pane}>
        <div className={styles.top}>
          <div className={styles.title}>ASK ME ANYTHING</div>
        </div>
        <div ref={ref} className={styles.content}>
          {
            /* Display chat content. */
          }
        </div>
        <ChatCreate
          input={input}
          onInputChange={setInput}
          onSend={handleSend}
          onOptionSend={handleOptionSend}
        />
      </div>
    </div>
  );
}
