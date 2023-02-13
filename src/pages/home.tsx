import React from 'react'
import { useList } from "@pankod/refine-core"

import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
} from "components";
import { Box, Typography, Stack } from '@pankod/refine-mui';


const home = () => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart title="Properties for Sale"
                    value={684}
                    series={[75, 25]}
                    colors={["#475be8", "#e4e8ef"]} />
                <PieChart title="Properties for Rent"
                    value={684}
                    series={[60, 40]}
                    colors={["#473ce8", "#e4e8ef"]} />
                <PieChart title="Total"
                    value={5684}
                    series={[75, 25]}
                    colors={["#00A000", "#e4d8ef"]} />
                <PieChart title="Properties for Cities"
                    value={555}
                    series={[38, 62]}
                    colors={["#A05be8", "#00A000"]} />
            </Box>
            <Stack mt="25px" width="100%" direction={{ xs: "column", lg: "row" }} gap={2}>
                <TotalRevenue></TotalRevenue>
                <PropertyReferrals></PropertyReferrals>
            </Stack>

        </Box>
    )
}

export default home