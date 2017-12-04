import styles from 'flexboxgrid/css/flexboxgrid.css';

export function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className
}
