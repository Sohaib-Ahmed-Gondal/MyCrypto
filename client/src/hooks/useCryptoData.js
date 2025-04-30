export default function useCryptoData(coinId) {
    const [price, setPrice] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
        setPrice(res.data[coinId].usd);
      };
      fetchData();
    }, [coinId]);
    return price;
  }