function Message(){
    const name = 'Obed';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello Person!</h1>;
}

export default Message;