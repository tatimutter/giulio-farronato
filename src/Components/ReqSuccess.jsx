import React from 'react';

function ReqSuccess() {
	return (
		<>
			<div className="card shadow border-0 rounded-4 mb-5">
				<div className="card-body p-5">
					<div className="row align-items-center gx-5">
						<div className="col text-center text-lg-middle mb-4 mb-lg-0">
							<div className="bg-light p-4 rounded-4">
								<div className="first-blue fw-bolder mb-2">
									La tua richiesta è stata inviata!
								</div>
								<div className="first-blue small fw-bolder">Grazie</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ReqSuccess;
