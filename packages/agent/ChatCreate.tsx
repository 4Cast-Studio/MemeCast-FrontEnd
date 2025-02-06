import styles from './ChatCreate.module.scss';

export type ChatCreateProps = {
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onOptionSend: (value: string) => void;
  sendLoading: boolean;
};

const CommentLengthMax = 300;

export function ChatCreate(props: ChatCreateProps) {
  const { input, onInputChange, onSend, onOptionSend, sendLoading } = props;

  const { account, sign, signIn } = useSign();
  const { setConnectModalVisibleAll } = useUi();

  const placeholder = useMemo(() => {
    if (account == null) {
      return 'Connect your wallet.';
    }

    if (sign == null) {
      return 'Sign your wallet.';
    }

    return 'Message Camila';
  }, [account, sign]);

  const inputDisabled = useMemo(() => {
    return sign == null;
  }, [sign]);

  const sendDisabled = useMemo(() => {
    return inputDisabled || input === '' || sendLoading;
  }, [inputDisabled, input, sendLoading]);

  const options = useMemo(() => {
    return [
      'Who is Camila ?🤖',
      'What can i do with Camila ?🎮',
      'Say, Hi ?🌞',
      'Why You Use Deepseek V3?🐳',
    ];
  }, []);

  const handleSend = useCallback(() => {
    if (sendDisabled) {
      return;
    }

    onSend();

    onInputChange('');
  }, [sendDisabled, onSend, onInputChange]);

  const handleKeyUp = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  }, [handleSend]);

  const handleClick = useCallback(() => {
    if (account == null) {
      setConnectModalVisibleAll();
    }

    if (sign == null) {
      signIn().catch(() => {});
    }
  }, [sign, signIn, account, setConnectModalVisibleAll]);

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
          {
            sendLoading
              ? <LoadingSpin loading size={19} />
              : <ArrowUpward className={styles.arrow} />
          }
        </Button>
      </div>
      <div className={styles.options}>
        {
          options.map((item, index) => (
            <Button
              key={index}
              disabled={sendLoading}
              onClick={() => onOptionSend(item)}
              className={styles.option}
            >
              { item }
            </Button>
          ))
        }
      </div>
    </div>
  );
}
