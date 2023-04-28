function DoSomething() {

}

const DoSomething = () => {

}

<button onClick={DoSomething}></button>

const myComponant = () => {
    return <div></div>
}

<button 
    onClick= {() => {
        console.log("Hello World");
    }}
></button>