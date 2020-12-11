import React from 'react'
import Fade from 'react-reveal/Fade'

import InputText from '../../elements/Stepper/InputText/index'
import InputFile from '../../elements/Stepper/InputFile/index'

import logoMandiri from '../../assets/images/logo-mandiri.jpg'
import logoBca from '../../assets/images/logo-bca.jpg'

function payment(props) {
    const { data, ItemDetails, checkout } = props;

    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;

    return (
        <Fade>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-5 border-right py-5">
                        <Fade delay={300}>
                            <p className="mb-4">Transfer Pembayaran:</p>
                            <p>Tax: {tax}</p>
                            <p>Sub Total: ${subTotal} USD</p>
                            <p>Total: ${grandTotal} USD</p>

                            <div className="row mt-4">
                                <div className="col-3 text-right">
                                    <img src={logoBca} alt="Bank Central Asia" width="60"/>
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd>Bank Central Asia</dd>
                                        <dd>2202 1998</dd>
                                        <dd>Rivari</dd>
                                    </dl>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3 text-right">
                                    <img src={logoMandiri} alt="Mandiri" width="60"/>
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd>Bank Mandiri</dd>
                                        <dd>2202 1998</dd>
                                        <dd>Rivari</dd>
                                    </dl>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-5 py-5">
                        <Fade delay={600}>
                            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                            <InputFile 
                                accept="image/*"
                                id="proofPayment"
                                name="proofPayment"
                                value={data.proofPayment}
                                onChange={props.onChange}
                            />

                            <label htmlFor="bankName">Asal Bank</label>
                            <InputText 
                                id="bankName"
                                name="bankName"
                                value={data.bankName}
                                type="text"
                                onChange={props.onChange}
                            />

                            <label htmlFor="bankHolder">Asal Bank</label>
                            <InputText 
                                id="bankHolder"
                                name="bankHolder"
                                value={data.bankHolder}
                                type="text"
                                onChange={props.onChange}
                            />


                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default payment