import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddOnMasterForm = ({ addons }) => {
    const [selectedAddons, setSelectedAddons] = useState([]);

    const handleCheckboxChange = (addon) => {
        setSelectedAddons(prevSelected => {
            if (prevSelected.some(item => item.addonId === addon.addonId)) {
                return prevSelected.filter(item => item.addonId !== addon.addonId);
            } else {
                return [...prevSelected, addon];
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected Add-ons:', selectedAddons);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h3>Select Add-ons</h3>
            {addons.map((addon) => (
                <Form.Check
                    key={addon.addonId}
                    type="checkbox"
                    label={`${addon.addonName} - $${addon.addonDailyRate} (Valid until ${addon.rateValidUpto})`}
                    onChange={() => handleCheckboxChange(addon)}
                    checked={selectedAddons.some(item => item.addonId === addon.addonId)}
                />
            ))}
            <Button type="submit" variant="primary">Submit</Button>
        </Form>
    );
};

export default AddOnMasterForm;
