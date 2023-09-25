{
    const a = 10;
    {
        const a = 20;
        {
            const a = 30;

            console.log(a);
        }

        console.log(a);
    }

    console.log(a);
}

console.log(a);