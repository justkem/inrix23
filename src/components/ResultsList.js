const ResultsList = ({ lots }) => {
    return (
        <div id="accordion" className="list-group" style={{
            position: 'absolute',
            top: '20px',
            right: '0',
            width: '400px',
            zIndex: 10000
          }} >
                {lots.map((lot, index) => (
                    <div className="card" key={index}>
                        <div className="card-header" id={`heading${index}`}>
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                    {lot.name}
                                </button>
                            </h5>
                        </div>

                        <div id={`collapse${index}`} className="collapse show" aria-labelledby={`heading${index}`} data-parent="#accordion">
                            <div className="card-body">
                                {lot.rateCard.map((rate, idx) => (
                                    <p style={{margin: '0px'}}>{rate}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ResultsList