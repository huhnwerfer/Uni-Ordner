import pandas as pd


#file paths
input_file = "25SoSe/Visualisierung/Praktikum-1/Daten/Praktikum-1.csv"
output_file = "25SoSe/Visualisierung/Praktikum-1/Daten/Bereingte_Daten.csv"

#cleaning the csv of € signs, and swapping ' with "
with open(input_file, encoding="utf-8") as f:
	lines = f.readlines()
cleaned_lines = []
for line in lines:
	line = line.replace("'", '"')
	parts = line.split(",")
	for i in range(len(parts) - 1):
		if "€" in parts[i]:
			parts.pop(i)
			break
	cleaned_lines.append(",".join(parts))

with open(output_file, "w", encoding="utf-8") as f:
	f.writelines(cleaned_lines)

#finding missing values in lines and removin whole row
df = pd.read_csv(output_file, sep=",", encoding="utf-8")
for index, row in df.iterrows():
	missing_count = row.isnull().sum()
	missing_cols = row[row.isnull()].index.tolist()
	if row.count() != 89:
		print(f"Row {index+2}: {row.count()} fields")

#removing rows with missing values
df = df.dropna()

df = df.drop_duplicates()
#save the cleaned DataFrame to a new CSV file
df.to_csv(output_file, index=False)
