const Button = (props) => {

    const { onClick } = props

    return (
        <button onClick={onClick} class="btn">Favorite</button>
    )
}

export default Button