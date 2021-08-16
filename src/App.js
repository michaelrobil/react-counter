import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    handleDelete = (id) => {
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({ counters })
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter }
        counters[index].value++;
        this.setState({ counters })
    }

    handelReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c
        });
        this.setState({ counters })
    }
    render() {
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <Counters
                    counters={this.state.counters}
                    onReset={this.handelReset}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement} />
            </React.Fragment>
        );
    }
}

export default App;