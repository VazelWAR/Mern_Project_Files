//MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Box
      sx={{
        mb: 0,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
        }}
      >
        <Link variant="inherit" href="https://github.com/mamarmar">
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
