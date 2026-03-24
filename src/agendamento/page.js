import db from '@/lib/db';
export default async () => {
    const a = 10;
    
     const consumidor =await db.query("select * from consumidor")
    return (<><h1>
       Consumidores
        </h1>
        <ol>
            {consumidores.map(c => <li>{c.nome}</li>)}
            
        </ol>
        </>)
}



