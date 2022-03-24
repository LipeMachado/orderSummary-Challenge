import React from 'react';
import {
    BgSection,
    BoxContainerDiv,
    ImageContainerHeaderBoxDiv,
    BgHeaderBoxDiv,
    TextContainerDiv,
    TitleH1,
    ParagraphContainerDiv,
    ParagraphP,
    PlansContainerDiv,
    PlansLeftDiv,
    PlansDetailsDiv,
    AnnualPlanH5,
    PricePlanP,
    PlansRightDiv,
    ChangePlanLinkA,
    ButtonDiv,
    PaymentButton,
    CancelButton
} from './style.jsx';

import BgHeaderBox from '../../images/illustration-hero.png';

export function OrderSummary() {
    return (
        <>
            <BgSection>
                <BoxContainerDiv>
                
                    <ImageContainerHeaderBoxDiv>
                        <BgHeaderBoxDiv src={BgHeaderBox} />
                    </ImageContainerHeaderBoxDiv>
                    
                    <TextContainerDiv>
                        <TitleH1>Order Summary</TitleH1>
                        <ParagraphContainerDiv>
                            <ParagraphP>You can now listen to milions of songs, audiobooks, and podcasts on any device anywhere you like!</ParagraphP>
                        </ParagraphContainerDiv>
                    </TextContainerDiv>

                    <PlansContainerDiv>
                        <PlansLeftDiv>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB"/><path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"/></g></svg>
                            <PlansDetailsDiv>
                                <AnnualPlanH5>Annual Plan</AnnualPlanH5>
                                <PricePlanP>$59.99/year</PricePlanP>
                            </PlansDetailsDiv>
                        </PlansLeftDiv>

                        <PlansRightDiv>
                            <ChangePlanLinkA href="/">Change</ChangePlanLinkA>
                        </PlansRightDiv>
                    </PlansContainerDiv>

                    <ButtonDiv>
                        <PaymentButton>Proceed to Payment</PaymentButton>
                        <CancelButton>Cancel Order</CancelButton>
                    </ButtonDiv>

                </BoxContainerDiv>
            </BgSection>
        </>
    );
}