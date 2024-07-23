// variant - full || empty
function Button({variant = 'full', text = 'Learn more'}) {
  return <a className={`button button-${variant}`} href="#">{text}</a>;
}

export default Button;
