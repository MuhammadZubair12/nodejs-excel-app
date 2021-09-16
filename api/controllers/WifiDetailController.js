const wifi = require("node-wifi");

const WifiDetailController = () => {
    const getDetails = async (req, res) => {
        try {
            wifi.init({
                iface: null
            });

            wifi.getCurrentConnections((error, currentConnections) => {
                if (error) {
                    res.status(400).json({
                        msg: error
                    })
                } else {
                    const data = currentConnections.map((data) => {
                        return data;
                    })
                    res.status(400).json(data)
                }
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    return {
        getDetails,
    };
};

module.exports = WifiDetailController;