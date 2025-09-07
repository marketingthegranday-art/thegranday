import React, { useState } from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QuoteModal from '../components/Quote/QuoteModal';
import FeedbackModal from '../components/Quote/feedback/base';

const FormButton = () => {
    const [showQuoteDialog, setShowQuoteDialog] = useState(false);
    const [feedbackData, setFeedbackData] = useState(null);

    const handleClick = () => {
        setShowQuoteDialog(true);
    };

    const handleQuoteClose = () => {
        setShowQuoteDialog(false);
        setFeedbackData(null);
    };

    const handleQuoteSuccess = () => {
        setShowQuoteDialog(false);
    };

    const handleFeedbackClick = (phoneNumber, city, services, callbackID) => {
        setFeedbackData({ ph: phoneNumber, city, services, callbackID });
    };

    return (
        <>
            <Button
                onClick={handleClick}
                sx={{
                    width: '220px',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontSize: '18px',
                    fontWeight: '600',
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid #f3f4f7',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#F8F8F8',
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: '#F8F8F8',
                    }
                }}
            >
                Step into forever
                <ArrowForwardIcon 
                    sx={{
                        fontSize: '28px',
                        transform: 'rotate(315deg)',
                    }}
                />
            </Button>

            {/* Quote Modal */}
            {showQuoteDialog && (
                <QuoteModal
                    open={showQuoteDialog}
                    onClose={handleQuoteClose}
                    onSuccess={handleQuoteSuccess}
                    onFeedback={handleFeedbackClick}
                    hideSequalFeedback={false}
                    referer="landing_page"
                />
            )}

            {/* Feedback Modal */}
            {feedbackData && (
                <FeedbackModal
                    ph={feedbackData.ph}
                    city={feedbackData.city}
                    services={feedbackData.services}
                    callbackID={feedbackData.callbackID}
                    onFinish={() => {
                        setShowQuoteDialog(false);
                        setFeedbackData(null);
                    }}
                />
            )}
        </>
    );
};

export default FormButton;