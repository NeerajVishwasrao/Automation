import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class automation {
    public static void main(String[] args) {
        automation g = new automation();
        //  g.createFile();
        // g.sleep();
        // g.changeFileName();
        // g.sleep();
        // g.deleteFiles();
        g.addTextToFile();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    ///
    public void addTextToFile() {
        int errorCount = 0;
        System.out.println("\n\n Adding text into file started -> ");
        try {
            // getting data from folder
            File allFile = new File("E:\\FileBucket");
            System.out.println("\n getting all files from folder = " + allFile);
            File[] allFilesArray = allFile.listFiles(); // getting data of files in array format inside folder;s

            if (allFilesArray.length < 1) {
                try {
                    ++errorCount;
                    throw new Exception();
                } catch (Exception e) {
                    System.out.println(" **Error folder of files is empty ");
                }
            }
            for (int i = 0; i < allFilesArray.length; i++) {
                File file = new File("E:\\FileBucket\\" + allFilesArray[i].getName());
                System.out.println("\n current file = " + file);

                int dotindex = allFilesArray[i].getName().indexOf(".");

                String html = ".html";
                if (!allFilesArray[i].getName().substring(dotindex).equals(html)) {
                    try {
                        ++errorCount;
                        throw new Exception();
                    } catch (Exception e) {
                        System.out.println("**Error file extension is not .html");
                    }
                } else {

                    int indexOfUnderscore = file.getName().indexOf("_");

                    if (indexOfUnderscore == -1) {
                        try {
                            ++errorCount;
                            throw new Exception();
                        } catch (Exception e) {
                            System.out.println("**Error while getting script file name"
                                    + " invalid index of underscore  underscore not present  index is = "
                                    + indexOfUnderscore);

                        }
                    }

                    List<String> FileDataArray = new ArrayList<>();
                    Scanner sc = new Scanner(allFilesArray[i]);

                    while (sc.hasNextLine()) {
                        FileDataArray.add(sc.nextLine());
                    }

                    Pattern pattern = Pattern.compile("<script" + "\\b");
                    Matcher matcher = pattern.matcher(FileDataArray.get(FileDataArray.size() - 1));

                    if (matcher.find()) {
                        try {
                            ++errorCount;
                            throw new Exception();

                        } catch (Exception e) {
                            System.out.println(" **Error Script tag already exists");
                        }
                    } else {
                        String templateName = file.getName().substring(0, indexOfUnderscore);

                        String endText = "<script src=\"/t1/" + templateName + ".js\"></script>";

                        FileDataArray.add(endText);
                    }

                    // script tag added in file in above code ^

                    // every line of file added in arralylist in above code ^
                    String dataToLoad = " onload=\"reset()\" ";
                    String dataToFind = "viewBox";

                    pattern = Pattern.compile("\\b" + "onload" + "\\b");
                    matcher = pattern.matcher(FileDataArray.get(0));
                    if (matcher.find()) {
                        try {
                            ++errorCount;
                            throw new Exception();
                        } catch (Exception e) {
                            System.out.println(" **Error onload method already exists");
                        }
                    } else {
                        pattern = Pattern.compile("\\b" + dataToFind + "\\b");
                        matcher = pattern.matcher(FileDataArray.get(0));
                        if (matcher.find()) {

                            int start = matcher.start();
                            String newStr = FileDataArray.get(0).substring(0, start) + dataToLoad
                                    + FileDataArray.get(0).substring(start);
                            FileDataArray.set(0, newStr);

                            // first line updated here in above code onload=reset() added ^

                            FileWriter filewriter2 = new FileWriter("E:\\FileBucket\\" + allFilesArray[i].getName(),
                                    false);

                            for (String line : FileDataArray) {
                                filewriter2.write(line);
                                filewriter2.write(System.lineSeparator());
                            }
                            // filewriter.close();

                            filewriter2.close();
                        } else {
                            ++errorCount;

                            System.out.println(dataToFind + " = is not found ");
                        }

                    }
                }
            }

        } catch (Exception e) {
            ++errorCount;

            System.out.println("error while writing in file " + e);

        }
        System.out.println("error count is = " + errorCount + "\n");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    ///
    void createFile() {
        System.out.println("hello world");
        // File file = new File("F:\\java automation\\AjayPalkar.svg");

        try {
            for (int i = 0; i < 5; i++) {

                FileWriter fileWriter = new FileWriter("E:\\FileBucket\\evs04_q" + i + ".svg");
                String svgContent = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" width=\"60\" height=\"30\" style=\"shape-rendering: auto; display: block; background:not\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g><circle fill=\"#e15b64\" r=\"10\" cy=\"50\" cx=\"84\">\r\n"
                        + //
                        "    <animate begin=\"0s\" keySplines=\"0 0.5 0.5 1\" values=\"10;0\" keyTimes=\"0;1\" calcMode=\"spline\" dur=\"0.25s\" repeatCount=\"indefinite\" attributeName=\"r\"></animate>\r\n"
                        + //
                        "    <animate begin=\"0s\" values=\"#e15b64;#abbd81;#f8b26a;#f47e60;#e15b64\" keyTimes=\"0;0.25;0.5;0.75;1\" calcMode=\"discrete\" dur=\"1s\" repeatCount=\"indefinite\" attributeName=\"fill\"></animate>\r\n"
                        + //
                        "</circle><circle fill=\"#e15b64\" r=\"10\" cy=\"50\" cx=\"16\">\r\n" + //
                        "  <animate begin=\"0s\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" values=\"0;0;10;10;10\" keyTimes=\"0;0.25;0.5;0.75;1\" calcMode=\"spline\" dur=\"1s\" repeatCount=\"indefinite\" attributeName=\"r\"></animate>\r\n"
                        + //
                        "  <animate begin=\"0s\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" values=\"16;16;16;50;84\" keyTimes=\"0;0.25;0.5;0.75;1\" calcMode=\"spline\" dur=\"1s\" repeatCount=\"indefinite\" attributeName=\"cx\"></animate>\r\n"
                        + //
                        "</circle><circle fill=\"#f47e60\" r=\"10\" cy=\"50\" cx=\"50\">\r\n" + //
                        "  <animate begin=\"-0.25s\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" values=\"0;0;10;10;10\" keyTimes=\"0;0.25;0.5;0.75;1\" calcMode=\"spline\" dur=\"1s\" repeatCount=\"indefinite\" attributeName=\"r\"></animate>\r\n"
                        + //
                        "  <animate begin=\"-0.25s\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" values=\"16;16;16;50;84\" keyTimes=\"0;0.25;0.5;0.75;1\" calcMode=\"spline\" dur=\"1s\" repeatCount=\"indefinite\" attributeName=\"cx\"></animate>\r\n"
                        + //
                        "</circle><circle fill=\"#f8b26a\" r=\"10\" cy=\"50\" cx=\"84\">\r\n" + //
                        "  <animate begin=\"-0.5s\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" values=\"0;0;10;10;10\" keyTimes=\"0;0.25;0.5;0.75;1\" calcMode=\"spline\" dur=\"1s\" repeatCount=\"indefinite\" attributeName=\"r\"></animate>\r\n"
                        + //
                        "  <animate begin=\"-0.5s\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" values=\"16;16;16;50;84\" keyTimes=\"0;0.25;0.5;0.75;1\" calcMode=\"spline\" dur=\"1s\" repeatCount=\"indefinite\" attributeName=\"cx\"></animate>\r\n"
                        + //
                        "</circle><circle fill=\"#abbd81\" r=\"10\" cy=\"50\" cx=\"16\">\r\n" + //
                        "  <animate begin=\"-0.75s\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" values=\"0;0;10;10;10\" keyTimes=\"0;0.25;0.5;0.75;1\" calcMode=\"spline\" dur=\"1s\" repeatCount=\"indefinite\" attributeName=\"r\"></animate>\r\n"
                        + //
                        "  <animate begin=\"-0.75s\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1\" values=\"16;16;16;50;84\" keyTimes=\"0;0.25;0.5;0.75;1\" calcMode=\"spline\" dur=\"1s\" repeatCount=\"indefinite\" attributeName=\"cx\"></animate>\r\n"
                        + //
                        "</circle><g></g></g></svg>";
                fileWriter.write(svgContent);
                fileWriter.close();
            }

        } catch (Exception e) {
            System.out.println(" x x x x error  " + e);
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    ///
    public void changeFileName() {
        try {
            File file = new File("E:\\FileBucket");
            File[] allFilesArray = file.listFiles();
            for (int i = 0; i < allFilesArray.length; i++) {
                if (allFilesArray[i].isFile()) {
                    File oneFile = new File("E:\\FileBucket\\" + allFilesArray[i].getName());
                    int extensionIndex = oneFile.getName().indexOf(".");
                    String fileNmWithoutExt = oneFile.getName().substring(0, extensionIndex);
                    // String NameExt = file.getName().substring(indexOfExtension);

                    oneFile.renameTo(new File("E:\\FileBucket\\" + fileNmWithoutExt + ".html"));

                }

            }
        } catch (Exception e) {
            System.out.println(" error in file name changeing = " + e);
        }

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    ///
    public void deleteFiles() {
        try {

            File files = new File("E:\\FileBucket\\");
            File[] allFiles = files.listFiles();

            for (int i = 0; i < allFiles.length; i++) {
                // File file = new File("F:\\java automation\\AjayPalkar" + i + ".html");

                File file = new File("E:\\FileBucket\\" + allFiles[i].getName());
                file.delete();
            }
        } catch (Exception e) {
            System.out.println("error in file deletion  = " + e);
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    ///
    public void sleep() {
        try {
            Thread.sleep(2 * 1000);
        } catch (Exception e) {
            System.out.println("some error occured while sleeping = " + e);
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}