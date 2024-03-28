//importing the card component...the card components receive data...
import { Card } from '@/app/ui/dashboard/cards';
//importing the RevenueChart component...this component also receives data...
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
//importing the LatestInvoices component...it receives data
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
//importing lusitana from the google fonts...
import { lusitana } from '@/app/ui/fonts';
//importing the fetchRevenue function from the data.ts file, so that I can fetch the data from the datasbase....
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

//this is an async component, which means, it allows you to use await to fetch data...
export default async function Page(){
    //this gets the data from the data.ts file...
    const revenue = await fetchRevenue();
    const invoice = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
      } = await fetchCardData();

    return (
        <main>
            <h1 className='{`${lusitana.className} mb-4 text-xl md:text-2xl`}'>
                Dashboard
            </h1>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
               <Card title="Pending" value={totalPendingInvoices} type="pending" /> 
                 <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
                <Card
                    title="Total Customers"
                    value={numberOfCustomers}
                    type="customers"
    />

      </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 md:mt-6 md:gap-6">
                 <div><RevenueChart revenue={revenue}  /></div>
                <div> <LatestInvoices latestInvoices={invoice} /> </div>
      </div>
        </main>
    )
}

