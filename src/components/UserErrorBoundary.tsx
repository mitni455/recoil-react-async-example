import {Component, ReactNode, ErrorInfo} from 'react';

interface TProps{
    children: ReactNode;
}
interface TState{
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
}
export class UserErrorBoundary extends Component<TProps, TState>{
    constructor(props:TProps){
        super(props);
        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError(error:Error){
        return {hasError: true};
    }
    componentDidCatch(error:Error, errorInfo:ErrorInfo){
        this.setState({
            ...this.state,
            error,
            errorInfo,
        })
        console.error(`Uncaught error:`, error, errorInfo);
    }
    render(){
        if(this.state.hasError){
            return (
                <section id='user-error'>
                    <p>
                        {this.state.error.message}
                    </p>
                    <pre>
                        {this.state.errorInfo.componentStack}
                    </pre>
                </section>
            );
        }
        else{
            return this.props.children;
        }
    }
}