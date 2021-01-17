import React from "react";
import { FieldProps } from 'react-admin';

const ArrayLengthField = ({ record, source }: FieldProps) => {
    const value = record?.[source ?? ''];
    return (
        <div>
            {value.length}
        </div>
    )
};

export default ArrayLengthField;
