const SecretData = () => (
    <div>
        top secret data
    </div>
);

const canVisit = (comp) => {
    return (props) => (
        <div>
            {props.auth === true ? <SecretData /> : <p>access denied</p>}
        </div>
    );
};

const Auth = canVisit(SecretData);

ReactDOM.render(<Auth auth={true} />, document.getElementById('app'));