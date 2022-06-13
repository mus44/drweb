const Remove = (props) => {

    const { onClick } = props

    return (
        <button onClick={onClick} class="btn-del">Remove</button>
    )
}

export default Remove