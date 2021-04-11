import { quotes } from './quotes';
import styles from './Quote.module.css';
import { selectRandomQuotes } from './selectRandomQuotes';

const defaultQuote = selectRandomQuotes(quotes);

export const Quote = ({ quote = defaultQuote }) => {
  const { text, author } = quote;

  return (
    <footer className={styles.quote}>
      <blockquote>{text}</blockquote>
      <cite className={styles.author}>— {author}</cite>
    </footer>
  )
}