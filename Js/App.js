function App(props){
    return (
        <main>
            <div>
                <Header/>
                <Destaque/>
                <Principal/>
                <Footer/>
            </div>
        </main>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))