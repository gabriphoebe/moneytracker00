import React, {useState} from 'react';
import styles from './css/LedgerInputWrapper.css';
import LedgerInput from './LedgerInput';


export default function LedgerInputWrapper() {

    return (
        <div>
            <h1>Input your transaction here</h1>
            <LedgerInput />
        </div>
    )
}