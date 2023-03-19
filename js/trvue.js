      const app = new Vue({
        el: '#app',
        data: {
          data: [],
          options: {
            theme: 'light',
            timezone: 'America/New_York',
            toolbar_bg: '#f1f3f6',
            datafeed: {
              type: 'rest',
              options: {
                url: 'https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2011-01-01/2023-03-11?adjusted=true&sort=asc&limit=120&apiKey=vszA3DlohzhA2BooRb0loJugkdZ2z3p3',
                data: [],
                dataTransformer: (data) => {
                  return data.results.map((result) => ({
                    time: result.t,
                    open: result.o,
                    high: result.h,
                    low: result.l,
                    close: result.c,
                    volume: result.v,
                  }));
                },
              },
            },
          },
          height: 500,
          width: 800,
        },
      });
