async function fetchData() {
    console.log("Starting to fetch data...");

    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Arjun Nafi' Mahardika",
                Country: "Indonesia"
            });
        }, 2000); //delay 2 detik
    });

    console.log("Data fetched successfully!");
    return data;
}

async function main() {
    try {
        console.log("Before fetching data");
        const result = await fetchData();
        console.log("Fetched data:", result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

main();