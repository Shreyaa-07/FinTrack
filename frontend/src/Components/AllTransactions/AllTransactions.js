import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import IncomeItem from '../IncomeItem/IncomeItem';

function AllTransactions() {
    const {fullHistory, getIncomes, getExpenses, deleteIncome, deleteExpense} = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const transactions = fullHistory()

    return (
        <AllTransactionsStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="transactions-list">
                    {transactions.map((transaction) => {
                        const {_id, title, amount, date, category, description, type} = transaction;
                        return <IncomeItem
                            key={_id}
                            id={_id} 
                            title={title} 
                            description={description} 
                            amount={amount} 
                            date={date} 
                            type={type}
                            category={category} 
                            indicatorColor={type === 'expense' ? 'red' : 'var(--color-green)'}
                            deleteItem={type === 'expense' ? deleteExpense : deleteIncome}
                        />
                    })}
                </div>
            </InnerLayout>
        </AllTransactionsStyled>
    )
}

const AllTransactionsStyled = styled.div`
    .transactions-list{
        margin-top: 2rem;
    }
`;

export default AllTransactions
