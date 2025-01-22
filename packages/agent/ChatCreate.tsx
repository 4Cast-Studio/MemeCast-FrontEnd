import styles from './ChatCreate.module.scss';

export type ChatCreateProps = {
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onOptionSend: (value: string) => void;
};

const CommentLengthMax = 300;

export function ChatCreate(props: ChatCreateProps) {
  const { input, onInputChange, onSend, onOptionSend } = props;

  const handleSend = useCallback(() => {
    // Send question.
  }, []);

  const handleKeyUp = useCallback((event: React.KeyboardEvent) => {
    // Send question by Enter Key.
  }, []);

  const handleClick = useCallback(() => {
    // User verify.
  }, []);

  return (
    <div>
      <div className={styles.input}>
        { (sign == null) && <div onClick={handleClick} className={styles.mask} /> }
        <Input
          value={input}
          onChange={onInputChange}
          onKeyUp={handleKeyUp}
          placeholder={placeholder}
          disabled={inputDisabled}
          maxLength={CommentLengthMax}
        />
        <Button
          onClick={handleSend}
          disabled={sendDisabled}
          className={styles.button}
        >
        </Button>
      </div>
      <div className={styles.options}>
        {/* Preset questions. */}
      </div>
    </div>
  );
}
