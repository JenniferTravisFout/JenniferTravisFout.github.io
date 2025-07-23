(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/implementation-guide.md b/implementation-guide.md
--- a/implementation-guide.md
+++ b/implementation-guide.md
@@ -0,0 +1,644 @@
+# Fraud Forecast UI Modernization - Developer Implementation Guide
+
+## Overview
+This guide provides everything your development team needs to implement the modernized Fraud Forecast interface using Material UI and the Rippleshot brand colors.
+
+## 🎨 Design Changes Summary
+
+### Key Improvements
+1. **Modern Card Design**: Rounded corners (12px), subtle shadows, hover effects
+2. **Enhanced Typography**: Inter font family, improved hierarchy
+3. **Better Color Usage**: Systematic use of Rippleshot brand colors
+4. **Improved Spacing**: 8px grid system for consistent spacing
+5. **Enhanced Data Visualization**: Color-coded risk scores with icons
+6. **Responsive Layout**: Grid-based layout that adapts to screen sizes
+7. **Dark Mode Support**: Complete dark theme implementation
+
+## 📦 Dependencies Required
+
+```json
+{
+  "@mui/material": "^5.14.0",
+  "@mui/icons-material": "^5.14.0",
+  "@emotion/react": "^11.11.0",
+  "@emotion/styled": "^11.11.0"
+}
+```
+
+## 🎯 Step 1: Install Dependencies
+
+```bash
+npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
+```
+
+## 🎯 Step 2: Setup Theme Provider
+
+Create a new file `src/theme/index.js` and use the theme configuration from `material-ui-theme-update.js`:
+
+```jsx
+// src/theme/index.js
+import { ThemeProvider, CssBaseline } from '@mui/material';
+import { lightTheme, darkTheme } from './material-ui-theme-update';
+
+export const AppThemeProvider = ({ children, mode = 'light' }) => {
+  const theme = mode === 'dark' ? darkTheme : lightTheme;
+  
+  return (
+    <ThemeProvider theme={theme}>
+      <CssBaseline />
+      {children}
+    </ThemeProvider>
+  );
+};
+```
+
+## 🎯 Step 3: Update App.js
+
+```jsx
+// src/App.js
+import { useState } from 'react';
+import { AppThemeProvider } from './theme';
+import FraudForecast from './components/FraudForecast';
+
+function App() {
+  const [darkMode, setDarkMode] = useState(false);
+
+  return (
+    <AppThemeProvider mode={darkMode ? 'dark' : 'light'}>
+      <FraudForecast 
+        darkMode={darkMode} 
+        toggleDarkMode={() => setDarkMode(!darkMode)} 
+      />
+    </AppThemeProvider>
+  );
+}
+
+export default App;
+```
+
+## 🎯 Step 4: Create Updated Components
+
+### Main Fraud Forecast Component
+
+```jsx
+// src/components/FraudForecast.jsx
+import React from 'react';
+import {
+  Box,
+  Container,
+  Grid,
+  Card,
+  CardContent,
+  Typography,
+  Switch,
+  FormControlLabel
+} from '@mui/material';
+import { HeaderSection } from './HeaderSection';
+import { StatsGrid } from './StatsGrid';
+import { CardsAtRiskTable } from './CardsAtRiskTable';
+import { RecommendationsSidebar } from './RecommendationsSidebar';
+
+export default function FraudForecast({ darkMode, toggleDarkMode }) {
+  return (
+    <Container maxWidth="xl" sx={{ py: 3 }}>
+      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
+        <FormControlLabel
+          control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
+          label="Dark Mode"
+        />
+      </Box>
+      
+      <HeaderSection />
+      <StatsGrid />
+      
+      <Grid container spacing={4}>
+        <Grid item xs={12} lg={8}>
+          <CardsAtRiskTable />
+        </Grid>
+        <Grid item xs={12} lg={4}>
+          <RecommendationsSidebar />
+        </Grid>
+      </Grid>
+    </Container>
+  );
+}
+```
+
+### Header Section Component
+
+```jsx
+// src/components/HeaderSection.jsx
+import React from 'react';
+import { Box, Typography } from '@mui/material';
+
+export function HeaderSection() {
+  return (
+    <Box
+      sx={{
+        background: (theme) => 
+          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
+        color: 'white',
+        p: 4,
+        borderRadius: 3,
+        mb: 4,
+        boxShadow: (theme) => 
+          theme.palette.mode === 'dark' 
+            ? '0 4px 20px rgba(0, 132, 213, 0.2)'
+            : '0 4px 20px rgba(0, 105, 177, 0.15)'
+      }}
+    >
+      <Typography variant="h1" gutterBottom>
+        Fraud Forecast
+      </Typography>
+      <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
+        Real-time fraud detection and risk assessment for your card portfolio
+      </Typography>
+    </Box>
+  );
+}
+```
+
+### Stats Grid Component
+
+```jsx
+// src/components/StatsGrid.jsx
+import React from 'react';
+import { Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material';
+import { Warning, CreditCard, NotificationsActive, TrendingUp } from '@mui/icons-material';
+
+const stats = [
+  {
+    title: 'Risk Level',
+    value: 'High Risk',
+    label: 'Current threat level',
+    icon: Warning,
+    color: 'error',
+    indicator: 'Elevated activity detected'
+  },
+  {
+    title: 'Total Cards',
+    value: '9',
+    label: 'Cards monitored',
+    icon: CreditCard,
+    color: 'primary'
+  },
+  {
+    title: 'Active Alerts',
+    value: '3',
+    label: 'Requiring attention',
+    icon: NotificationsActive,
+    color: 'error'
+  }
+];
+
+export function StatsGrid() {
+  return (
+    <Grid container spacing={3} sx={{ mb: 4 }}>
+      {stats.map((stat, index) => (
+        <Grid item xs={12} sm={6} md={4} key={index}>
+          <Card
+            sx={{
+              transition: 'all 0.2s ease',
+              '&:hover': {
+                transform: 'translateY(-2px)',
+                boxShadow: (theme) => 
+                  theme.palette.mode === 'dark' 
+                    ? '0 6px 20px rgba(0, 0, 0, 0.4)'
+                    : '0 4px 16px rgba(0, 0, 0, 0.15)'
+              }
+            }}
+          >
+            <CardContent sx={{ p: 3 }}>
+              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
+                <Typography variant="overline" color="text.secondary" fontWeight={600}>
+                  {stat.title}
+                </Typography>
+                <Box
+                  sx={{
+                    width: 40,
+                    height: 40,
+                    borderRadius: 1,
+                    display: 'flex',
+                    alignItems: 'center',
+                    justifyContent: 'center',
+                    bgcolor: `${stat.color}.light`,
+                    color: `${stat.color}.main`
+                  }}
+                >
+                  <stat.icon />
+                </Box>
+              </Box>
+              
+              <Typography variant="h3" color={`${stat.color}.main`} gutterBottom>
+                {stat.value}
+              </Typography>
+              
+              <Typography variant="body2" color="text.secondary">
+                {stat.label}
+              </Typography>
+              
+              {stat.indicator && (
+                <Chip
+                  icon={<TrendingUp />}
+                  label={stat.indicator}
+                  size="small"
+                  color={stat.color}
+                  variant="outlined"
+                  sx={{ mt: 1 }}
+                />
+              )}
+            </CardContent>
+          </Card>
+        </Grid>
+      ))}
+    </Grid>
+  );
+}
+```
+
+### Cards At Risk Table Component
+
+```jsx
+// src/components/CardsAtRiskTable.jsx
+import React, { useState } from 'react';
+import {
+  Card,
+  CardContent,
+  Typography,
+  Table,
+  TableBody,
+  TableCell,
+  TableContainer,
+  TableHead,
+  TableRow,
+  Button,
+  TextField,
+  Box,
+  Chip,
+  IconButton
+} from '@mui/material';
+import {
+  Search,
+  FilterList,
+  FileDownload,
+  TrendingUp,
+  TrendingFlat,
+  TrendingDown
+} from '@mui/icons-material';
+
+const mockData = [
+  {
+    cardToken: '5799952865265969',
+    fraudScore: 78,
+    trend: 'up',
+    expirationDate: '01/04/2029',
+    status: 'Active',
+    lastUpdated: '06/23/2025'
+  },
+  {
+    cardToken: '0540016577238532',
+    fraudScore: 78,
+    trend: 'up',
+    expirationDate: '06/05/2028',
+    status: 'Active',
+    lastUpdated: '06/22/2025'
+  },
+  {
+    cardToken: '4929493939902271',
+    fraudScore: 75,
+    trend: 'flat',
+    expirationDate: '04/04/2028',
+    status: 'Active',
+    lastUpdated: '09/03/2023'
+  },
+  {
+    cardToken: '7907412686246205',
+    fraudScore: 74,
+    trend: 'flat',
+    expirationDate: '-',
+    status: 'Active',
+    lastUpdated: '06/25/2025'
+  },
+  {
+    cardToken: '6606625807305800',
+    fraudScore: 73,
+    trend: 'down',
+    expirationDate: '08/04/2028',
+    status: 'Active',
+    lastUpdated: '04/03/2024'
+  }
+];
+
+function getRiskColor(score) {
+  if (score >= 75) return 'error';
+  if (score >= 70) return 'warning';
+  return 'success';
+}
+
+function getTrendIcon(trend) {
+  switch (trend) {
+    case 'up': return TrendingUp;
+    case 'down': return TrendingDown;
+    default: return TrendingFlat;
+  }
+}
+
+export function CardsAtRiskTable() {
+  const [searchTerm, setSearchTerm] = useState('');
+
+  return (
+    <Card>
+      <CardContent sx={{ p: 3 }}>
+        <Typography variant="h4" gutterBottom>
+          Cards At Risk
+        </Typography>
+        
+        <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
+          <TextField
+            placeholder="Search cards..."
+            size="small"
+            value={searchTerm}
+            onChange={(e) => setSearchTerm(e.target.value)}
+            InputProps={{
+              startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />
+            }}
+            sx={{ flex: 1 }}
+          />
+          <Button variant="outlined" startIcon={<FilterList />}>
+            Filter
+          </Button>
+          <Button variant="outlined" startIcon={<FileDownload />}>
+            Export
+          </Button>
+        </Box>
+
+        <TableContainer>
+          <Table>
+            <TableHead>
+              <TableRow>
+                <TableCell>Card Token</TableCell>
+                <TableCell>Fraud Score</TableCell>
+                <TableCell>Expiration Date</TableCell>
+                <TableCell>Card Status</TableCell>
+                <TableCell>Last Updated</TableCell>
+                <TableCell>Actions</TableCell>
+              </TableRow>
+            </TableHead>
+            <TableBody>
+              {mockData.map((row, index) => {
+                const TrendIcon = getTrendIcon(row.trend);
+                const riskColor = getRiskColor(row.fraudScore);
+                
+                return (
+                  <TableRow key={index} hover>
+                    <TableCell>
+                      <Typography variant="body2" fontWeight={600}>
+                        {row.cardToken}
+                      </Typography>
+                    </TableCell>
+                    <TableCell>
+                      <Chip
+                        icon={<TrendIcon />}
+                        label={row.fraudScore}
+                        color={riskColor}
+                        size="small"
+                        variant="outlined"
+                      />
+                    </TableCell>
+                    <TableCell>{row.expirationDate}</TableCell>
+                    <TableCell>
+                      <Chip label={row.status} color="success" size="small" />
+                    </TableCell>
+                    <TableCell>{row.lastUpdated}</TableCell>
+                    <TableCell>
+                      <Button variant="contained" size="small">
+                        Review
+                      </Button>
+                    </TableCell>
+                  </TableRow>
+                );
+              })}
+            </TableBody>
+          </Table>
+        </TableContainer>
+      </CardContent>
+    </Card>
+  );
+}
+```
+
+### Recommendations Sidebar Component
+
+```jsx
+// src/components/RecommendationsSidebar.jsx
+import React from 'react';
+import {
+  Box,
+  Card,
+  CardContent,
+  Typography,
+  Button,
+  Stack
+} from '@mui/material';
+import { Security, FileDownload, Settings } from '@mui/icons-material';
+
+const recommendations = [
+  {
+    title: 'High Priority Action',
+    description: 'Review cards with scores above 75 immediately'
+  },
+  {
+    title: 'Adjust Cards to Reissue',
+    description: 'Consider reissuing 3 high-risk cards'
+  },
+  {
+    title: 'Monitor Trends',
+    description: 'Risk levels trending upward this week'
+  }
+];
+
+export function RecommendationsSidebar() {
+  return (
+    <Stack spacing={3}>
+      {/* Recommendations Widget */}
+      <Card>
+        <CardContent sx={{ p: 3 }}>
+          <Typography variant="h6" gutterBottom>
+            Recommendations
+          </Typography>
+          <Stack spacing={1.5}>
+            {recommendations.map((rec, index) => (
+              <Box
+                key={index}
+                sx={{
+                  p: 2,
+                  bgcolor: 'action.hover',
+                  borderRadius: 1
+                }}
+              >
+                <Typography variant="body2" fontWeight={600} gutterBottom>
+                  {rec.title}
+                </Typography>
+                <Typography variant="caption" color="text.secondary">
+                  {rec.description}
+                </Typography>
+              </Box>
+            ))}
+          </Stack>
+        </CardContent>
+      </Card>
+
+      {/* Risk Trends Widget */}
+      <Card>
+        <CardContent sx={{ p: 3 }}>
+          <Typography variant="h6" gutterBottom>
+            Risk Trends
+          </Typography>
+          <Box
+            sx={{
+              height: 200,
+              bgcolor: 'primary.light',
+              borderRadius: 1,
+              display: 'flex',
+              alignItems: 'center',
+              justifyContent: 'center',
+              border: 2,
+              borderStyle: 'dashed',
+              borderColor: 'primary.main',
+              color: 'primary.main'
+            }}
+          >
+            <Box textAlign="center">
+              <Typography variant="body2" fontWeight={500}>
+                Risk Score Chart
+              </Typography>
+              <Typography variant="caption">
+                Integration with your preferred chart library
+              </Typography>
+            </Box>
+          </Box>
+        </CardContent>
+      </Card>
+
+      {/* Quick Actions Widget */}
+      <Card>
+        <CardContent sx={{ p: 3 }}>
+          <Typography variant="h6" gutterBottom>
+            Quick Actions
+          </Typography>
+          <Stack spacing={1.5}>
+            <Button
+              variant="contained"
+              fullWidth
+              startIcon={<Security />}
+            >
+              Block High Risk Cards
+            </Button>
+            <Button
+              variant="outlined"
+              fullWidth
+              startIcon={<FileDownload />}
+            >
+              Export Report
+            </Button>
+            <Button
+              variant="outlined"
+              fullWidth
+              startIcon={<Settings />}
+            >
+              Configure Alerts
+            </Button>
+          </Stack>
+        </CardContent>
+      </Card>
+    </Stack>
+  );
+}
+```
+
+## 🎯 Step 5: Add Google Fonts
+
+Add to your `public/index.html`:
+
+```html
+<link rel="preconnect" href="https://fonts.googleapis.com">
+<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
+```
+
+## 🎯 Step 6: Testing & Validation
+
+### Checklist for Implementation
+- [ ] Theme provider is correctly configured
+- [ ] Both light and dark modes work properly
+- [ ] All Rippleshot brand colors are used correctly
+- [ ] Typography follows the new scale
+- [ ] Cards have proper hover effects
+- [ ] Table is responsive and scrollable
+- [ ] Icons are properly imported and displayed
+- [ ] Color-coded risk scores work correctly
+- [ ] Dark mode toggle functions properly
+
+### Browser Testing
+- [ ] Chrome/Chromium
+- [ ] Firefox
+- [ ] Safari
+- [ ] Edge
+
+### Responsive Testing
+- [ ] Desktop (1920x1080)
+- [ ] Tablet (768px)
+- [ ] Mobile (375px)
+
+## 🚀 Deployment Notes
+
+1. **Performance**: The new design uses Material UI's tree shaking, so only imported components will be bundled
+2. **Accessibility**: All components follow WCAG guidelines with proper contrast ratios
+3. **Browser Support**: Compatible with modern browsers (Chrome 88+, Firefox 85+, Safari 14+)
+
+## 🔧 Customization Options
+
+### Adding New Colors
+To add new colors to the theme, update the `brandColors` object in `material-ui-theme-update.js`.
+
+### Modifying Typography
+Adjust the typography scale in the theme configuration. All components will automatically inherit the changes.
+
+### Custom Components
+When creating new components, use the theme's spacing, colors, and typography for consistency:
+
+```jsx
+// Example of theme-aware styling
+sx={{
+  p: 3, // Uses theme.spacing(3)
+  bgcolor: 'primary.main', // Uses theme colors
+  typography: 'h6' // Uses theme typography
+}}
+```
+
+## 📋 Migration Checklist
+
+- [ ] Install new dependencies
+- [ ] Set up theme provider
+- [ ] Replace old components with new Material UI versions
+- [ ] Update color references to use theme colors
+- [ ] Test both light and dark modes
+- [ ] Verify responsive behavior
+- [ ] Update any custom CSS to use theme values
+- [ ] Test with real data
+- [ ] Deploy to staging environment
+- [ ] Get stakeholder approval
+- [ ] Deploy to production
+
+## 🎨 Visual Comparison
+
+**Before**: Basic table layout with limited styling
+**After**: Modern card-based layout with:
+- Enhanced visual hierarchy
+- Color-coded risk indicators
+- Improved spacing and typography
+- Dark mode support
+- Better mobile responsiveness
+- Consistent branding
+
+This implementation will give your fraud forecast tool a modern, professional appearance that aligns with current design trends while maintaining the functionality your users need.
EOF
)
